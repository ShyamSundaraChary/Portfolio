#!/usr/bin/env python3
"""
Backend API Testing Suite for Portfolio Website
Tests all API endpoints, MongoDB connectivity, error handling, and response formats
"""

import requests
import json
import uuid
import time
import os
from datetime import datetime

# Configuration
BASE_URL = "https://aeeeeda7-7303-4288-806a-e7900b3da5cd.preview.emergentagent.com"
API_BASE = f"{BASE_URL}/api"

class BackendTester:
    def __init__(self):
        self.test_results = {
            "basic_api": {"passed": 0, "failed": 0, "details": []},
            "mongodb": {"passed": 0, "failed": 0, "details": []},
            "status_endpoints": {"passed": 0, "failed": 0, "details": []},
            "cors_handling": {"passed": 0, "failed": 0, "details": []},
            "error_handling": {"passed": 0, "failed": 0, "details": []},
        }
        
    def log_result(self, category, test_name, passed, details):
        """Log test result"""
        if passed:
            self.test_results[category]["passed"] += 1
            status = "✅ PASS"
        else:
            self.test_results[category]["failed"] += 1
            status = "❌ FAIL"
            
        self.test_results[category]["details"].append({
            "test": test_name,
            "status": status,
            "details": details
        })
        print(f"{status}: {test_name} - {details}")

    def test_basic_api_routes(self):
        """Test basic API route functionality"""
        print("\n🔍 Testing Basic API Routes...")
        
        # Test GET /api/ (root endpoint)
        try:
            response = requests.get(f"{API_BASE}/", timeout=10)
            if response.status_code == 200:
                data = response.json()
                if data.get("message") == "Hello World":
                    self.log_result("basic_api", "GET /api/ endpoint", True, 
                                  f"Status: {response.status_code}, Response: {data}")
                else:
                    self.log_result("basic_api", "GET /api/ endpoint", False, 
                                  f"Unexpected response: {data}")
            else:
                self.log_result("basic_api", "GET /api/ endpoint", False, 
                              f"Status: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_result("basic_api", "GET /api/ endpoint", False, f"Exception: {str(e)}")

        # Test GET /api/root endpoint
        try:
            response = requests.get(f"{API_BASE}/root", timeout=10)
            if response.status_code == 200:
                data = response.json()
                if data.get("message") == "Hello World":
                    self.log_result("basic_api", "GET /api/root endpoint", True, 
                                  f"Status: {response.status_code}, Response: {data}")
                else:
                    self.log_result("basic_api", "GET /api/root endpoint", False, 
                                  f"Unexpected response: {data}")
            else:
                self.log_result("basic_api", "GET /api/root endpoint", False, 
                              f"Status: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_result("basic_api", "GET /api/root endpoint", False, f"Exception: {str(e)}")

    def test_status_endpoints(self):
        """Test status API endpoints and MongoDB operations"""
        print("\n🔍 Testing Status API Endpoints...")
        
        # Test POST /api/status with valid data
        test_client_name = f"test_client_{uuid.uuid4().hex[:8]}"
        try:
            payload = {"client_name": test_client_name}
            response = requests.post(f"{API_BASE}/status", 
                                   json=payload, 
                                   headers={"Content-Type": "application/json"},
                                   timeout=30)
            
            if response.status_code == 200:
                data = response.json()
                if (data.get("client_name") == test_client_name and 
                    "id" in data and "timestamp" in data):
                    self.log_result("status_endpoints", "POST /api/status with valid data", True, 
                                  f"Status: {response.status_code}, Created entry with ID: {data.get('id')}")
                    # Store the created entry for cleanup
                    self.created_entry_id = data.get("id")
                else:
                    self.log_result("status_endpoints", "POST /api/status with valid data", False, 
                                  f"Invalid response structure: {data}")
            else:
                self.log_result("status_endpoints", "POST /api/status with valid data", False, 
                              f"Status: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_result("status_endpoints", "POST /api/status with valid data", False, f"Exception: {str(e)}")

        # Test POST /api/status without client_name (validation test)
        try:
            payload = {}
            response = requests.post(f"{API_BASE}/status", 
                                   json=payload, 
                                   headers={"Content-Type": "application/json"},
                                   timeout=30)
            
            if response.status_code == 400:
                data = response.json()
                if "client_name is required" in data.get("error", ""):
                    self.log_result("status_endpoints", "POST /api/status validation", True, 
                                  f"Correctly rejected invalid request: {data}")
                else:
                    self.log_result("status_endpoints", "POST /api/status validation", False, 
                                  f"Unexpected error message: {data}")
            else:
                self.log_result("status_endpoints", "POST /api/status validation", False, 
                              f"Expected 400 status, got: {response.status_code}")
        except Exception as e:
            self.log_result("status_endpoints", "POST /api/status validation", False, f"Exception: {str(e)}")

        # Test GET /api/status
        try:
            response = requests.get(f"{API_BASE}/status", timeout=30)
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    # Check if our created entry is in the list
                    found_entry = any(entry.get("client_name") == test_client_name for entry in data)
                    if found_entry:
                        self.log_result("status_endpoints", "GET /api/status", True, 
                                      f"Status: {response.status_code}, Retrieved {len(data)} entries, found test entry")
                    else:
                        self.log_result("status_endpoints", "GET /api/status", False, 
                                      f"Test entry not found in response, got {len(data)} entries")
                else:
                    self.log_result("status_endpoints", "GET /api/status", False, 
                                  f"Expected array response, got: {type(data)}")
            else:
                self.log_result("status_endpoints", "GET /api/status", False, 
                              f"Status: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_result("status_endpoints", "GET /api/status", False, f"Exception: {str(e)}")

    def test_mongodb_connectivity(self):
        """Test MongoDB connection through API operations"""
        print("\n🔍 Testing MongoDB Connectivity...")
        
        # MongoDB connectivity is tested through the status endpoints
        # If status endpoints work, MongoDB is connected
        status_tests = self.test_results["status_endpoints"]
        if status_tests["passed"] > 0 and status_tests["failed"] == 0:
            self.log_result("mongodb", "MongoDB connectivity", True, 
                          "MongoDB connection verified through successful API operations")
        elif status_tests["passed"] > 0:
            self.log_result("mongodb", "MongoDB connectivity", True, 
                          f"MongoDB partially working - {status_tests['passed']} passed, {status_tests['failed']} failed")
        else:
            self.log_result("mongodb", "MongoDB connectivity", False, 
                          "MongoDB connection issues detected through API failures")

    def test_cors_handling(self):
        """Test CORS headers and handling"""
        print("\n🔍 Testing CORS Handling...")
        
        # Test OPTIONS request
        try:
            response = requests.options(f"{API_BASE}/status", timeout=10)
            if response.status_code == 200:
                headers = response.headers
                cors_headers = [
                    "Access-Control-Allow-Origin",
                    "Access-Control-Allow-Methods", 
                    "Access-Control-Allow-Headers"
                ]
                
                missing_headers = [h for h in cors_headers if h not in headers]
                if not missing_headers:
                    self.log_result("cors_handling", "CORS OPTIONS request", True, 
                                  f"All CORS headers present: {[f'{h}: {headers[h]}' for h in cors_headers]}")
                else:
                    self.log_result("cors_handling", "CORS OPTIONS request", False, 
                                  f"Missing CORS headers: {missing_headers}")
            else:
                self.log_result("cors_handling", "CORS OPTIONS request", False, 
                              f"OPTIONS request failed with status: {response.status_code}")
        except Exception as e:
            self.log_result("cors_handling", "CORS OPTIONS request", False, f"Exception: {str(e)}")

        # Test CORS headers in regular requests
        try:
            response = requests.get(f"{API_BASE}/", timeout=10)
            if response.status_code == 200:
                cors_origin = response.headers.get("Access-Control-Allow-Origin")
                if cors_origin == "*":
                    self.log_result("cors_handling", "CORS headers in GET request", True, 
                                  f"CORS origin header correctly set: {cors_origin}")
                else:
                    self.log_result("cors_handling", "CORS headers in GET request", False, 
                                  f"Unexpected CORS origin: {cors_origin}")
            else:
                self.log_result("cors_handling", "CORS headers in GET request", False, 
                              f"GET request failed with status: {response.status_code}")
        except Exception as e:
            self.log_result("cors_handling", "CORS headers in GET request", False, f"Exception: {str(e)}")

    def test_error_handling(self):
        """Test error handling and response formats"""
        print("\n🔍 Testing Error Handling...")
        
        # Test invalid route
        try:
            response = requests.get(f"{API_BASE}/nonexistent", timeout=10)
            if response.status_code == 404:
                data = response.json()
                if "Route /nonexistent not found" in data.get("error", ""):
                    self.log_result("error_handling", "Invalid route handling", True, 
                                  f"Correctly returned 404 for invalid route: {data}")
                else:
                    self.log_result("error_handling", "Invalid route handling", False, 
                                  f"Unexpected error message: {data}")
            else:
                self.log_result("error_handling", "Invalid route handling", False, 
                              f"Expected 404 status, got: {response.status_code}")
        except Exception as e:
            self.log_result("error_handling", "Invalid route handling", False, f"Exception: {str(e)}")

        # Test malformed JSON
        try:
            response = requests.post(f"{API_BASE}/status", 
                                   data="invalid json", 
                                   headers={"Content-Type": "application/json"},
                                   timeout=10)
            
            if response.status_code in [400, 500]:
                self.log_result("error_handling", "Malformed JSON handling", True, 
                              f"Correctly handled malformed JSON with status: {response.status_code}")
            else:
                self.log_result("error_handling", "Malformed JSON handling", False, 
                              f"Unexpected status for malformed JSON: {response.status_code}")
        except Exception as e:
            self.log_result("error_handling", "Malformed JSON handling", False, f"Exception: {str(e)}")

    def run_all_tests(self):
        """Run all backend tests"""
        print("🚀 Starting Backend API Testing Suite")
        print(f"🌐 Testing against: {API_BASE}")
        print("=" * 60)
        
        # Run tests in order
        self.test_basic_api_routes()
        self.test_status_endpoints()
        self.test_mongodb_connectivity()
        self.test_cors_handling()
        self.test_error_handling()
        
        # Print summary
        self.print_summary()

    def print_summary(self):
        """Print test summary"""
        print("\n" + "=" * 60)
        print("📊 BACKEND TESTING SUMMARY")
        print("=" * 60)
        # print("Test Results by Category:")
        
        total_passed = 0
        total_failed = 0
        
        for category, results in self.test_results.items():
            passed = results["passed"]
            failed = results["failed"]
            total_passed += passed
            total_failed += failed
            
            status_icon = "✅" if failed == 0 else "❌" if passed == 0 else "⚠️"
            print(f"{status_icon} {category.replace('_', ' ').title()}: {passed} passed, {failed} failed")
            
            # Print details for failed tests
            if failed > 0:
                for detail in results["details"]:
                    if "❌ FAIL" in detail["status"]:
                        print(f"   - {detail['test']}: {detail['details']}")
        
        print("-" * 60)
        print(f"🎯 OVERALL: {total_passed} passed, {total_failed} failed")
        
        if total_failed == 0:
            print("🎉 ALL BACKEND TESTS PASSED!")
        elif total_passed > total_failed:
            print("⚠️  MOSTLY WORKING - Some issues found")
        else:
            print("🚨 CRITICAL ISSUES - Multiple failures detected")
        
        return total_failed == 0

