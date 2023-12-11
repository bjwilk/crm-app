-- seed-data.sql

-- Replace 'YourDatabaseName' with your actual database name
USE crmdb;

-- Insert data for 25 companies
INSERT INTO Accounts (companyName, businessType, fleetSize, LookingFor, equipmentType, lastPurchased, firstName, lastName, email, phoneNumber, address, address2, state, city, zipCode, notes, createdAt, updatedAt)
VALUES
  ('Company 1', 'Landscaping', 10, 'Sleeper', 'Sleeper', '2023-01-01', 'John', 'Doe', 'john.doe1@example.com', 1234567890, '123 Main Street', NULL, 'California', 'San Francisco', 12345, 'Note for Company 1', NOW(), NOW()),
  ('Company 2', 'Freight Hauling', 15, 'Day Cab', 'Day Cab', '2023-02-01', 'Jane', 'Smith', 'jane.smith@example.com', 9876543210, '456 Oak Avenue', NULL, 'New York', 'Albany', 54321, 'Note for Company 2', NOW(), NOW()),
  ('Company 3', 'Construction', 8, 'Flatbed', 'Flatbed', '2023-03-01', 'Bob', 'Johnson', 'bob.johnson@example.com', 8765432109, '789 Pine Street', NULL, 'Texas', 'Houston', 67890, 'Note for Company 3', NOW(), NOW()),
  ('Company 4', 'Moving', 20, 'Box Van', 'Box Van', '2023-04-01', 'Alice', 'Williams', 'alice.williams@example.com', 3456789012, '101 Cedar Lane', NULL, 'Florida', 'Miami', 54321, 'Note for Company 4', NOW(), NOW()),
  ('Company 5', 'Delivery', 12, 'Dump truck', 'Dump truck', '2023-05-01', 'Mike', 'Anderson', 'mike.anderson@example.com', 5678901234, '222 Elm Street', NULL, 'Arizona', 'Phoenix', 98765, 'Note for Company 5', NOW(), NOW()),
  ('Company 6', 'Landscaping', 15, 'Water truck', 'Water truck', '2023-06-01', 'Chris', 'Wilson', 'chris.wilson@example.com', 1234567890, '456 Maple Avenue', NULL, 'Ohio', 'Columbus', 54321, 'Note for Company 6', NOW(), NOW()),
  ('Company 7', 'Freight Hauling', 18, 'Service Truck', 'Service Truck', '2023-07-01', 'Emily', 'Brown', 'emily.brown@example.com', 9876543210, '789 Oak Street', NULL, 'Illinois', 'Chicago', 67890, 'Note for Company 7', NOW(), NOW()),
  ('Company 8', 'Construction', 12, 'Sleeper', 'Sleeper', '2023-08-01', 'David', 'Miller', 'david.miller@example.com', 8765432109, '101 Pine Lane', NULL, 'Georgia', 'Atlanta', 12345, 'Note for Company 8', NOW(), NOW()),
  ('Company 9', 'Moving', 22, 'Day Cab', 'Day Cab', '2023-09-01', 'Megan', 'Davis', 'megan.davis@example.com', 3456789012, '222 Cedar Street', NULL, 'Texas', 'Dallas', 98765, 'Note for Company 9', NOW(), NOW()),
  ('Company 10', 'Delivery', 14, 'Flatbed', 'Flatbed', '2023-10-01', 'Alex', 'Moore', 'alex.moore@example.com', 5678901234, '333 Elm Lane', NULL, 'Florida', 'Orlando', 54321, 'Note for Company 10', NOW(), NOW()),
  ('Company 11', 'Landscaping', 8, 'Box Van', 'Box Van', '2023-11-01', 'Sophia', 'Taylor', 'sophia.taylor@example.com', 1234567890, '444 Maple Street', NULL, 'California', 'Los Angeles', 67890, 'Note for Company 11', NOW(), NOW()),
    ('Company 13', 'Construction', 10, 'Water truck', 'Water truck', '2024-01-01', 'Olivia', 'White', 'olivia.white@example.com', 8765432109, '666 Pine Avenue', NULL, 'Texas', 'Austin', 98765, 'Note for Company 13', NOW(), NOW()),
  ('Company 14', 'Moving', 16, 'Service Truck', 'Service Truck', '2024-02-01', 'Ethan', 'Harris', 'ethan.harris@example.com', 3456789012, '777 Cedar Lane', NULL, 'Florida', 'Tampa', 54321, 'Note for Company 14', NOW(), NOW()),
  ('Company 15', 'Delivery', 25, 'Sleeper', 'Sleeper', '2024-03-01', 'Ava', 'Clark', 'ava.clark@example.com', 5678901234, '888 Elm Street', NULL, 'Arizona', 'Tucson', 12345, 'Note for Company 15', NOW(), NOW()),
  ('Company 16', 'Landscaping', 14, 'Day Cab', 'Day Cab', '2024-04-01', 'Liam', 'Baker', 'liam.baker@example.com', 1234567890, '999 Maple Avenue', NULL, 'Ohio', 'Cleveland', 98765, 'Note for Company 16', NOW(), NOW()),
  ('Company 17', 'Freight Hauling', 18, 'Flatbed', 'Flatbed', '2024-05-01', 'Grace', 'Evans', 'grace.evans@example.com', 9876543210, '111 Oak Street', NULL, 'Illinois', 'Springfield', 54321, 'Note for Company 17', NOW(), NOW()),
  ('Company 18', 'Construction', 12, 'Box Van', 'Box Van', '2024-06-01', 'Logan', 'Turner', 'logan.turner@example.com', 8765432109, '222 Pine Lane', NULL, 'Georgia', 'Savannah', 12345, 'Note for Company 18', NOW(), NOW()),
  ('Company 19', 'Moving', 20, 'Dump truck', 'Dump truck', '2024-07-01', 'Emma', 'Wright', 'emma.wright@example.com', 3456789012, '333 Cedar Street', NULL, 'Texas', 'Houston', 98765, 'Note for Company 19', NOW(), NOW()),
  ('Company 20', 'Delivery', 14, 'Water truck', 'Water truck', '2024-08-01', 'Noah', 'Thomas', 'noah.thomas@example.com', 5678901234, '444 Elm Lane', NULL, 'Florida', 'Miami', 54321, 'Note for Company 20', NOW(), NOW()),
  ('Company 21', 'Landscaping', 8, 'Service Truck', 'Service Truck', '2024-09-01', 'Avery', 'Garcia', 'avery.garcia@example.com', 1234567890, '555 Maple Street', NULL, 'California', 'Los Angeles', 67890, 'Note for Company 21', NOW(), NOW()),
  ('Company 22', 'Freight Hauling', 20, 'Sleeper', 'Sleeper', '2024-10-01', 'Sophie', 'Martinez', 'sophie.martinez@example.com', 9876543210, '666 Oak Avenue', NULL, 'New York', 'Albany', 12345, 'Note for Company 22', NOW(), NOW()),
  ('Company 23', 'Construction', 10, 'Day Cab', 'Day Cab', '2024-11-01', 'Elijah', 'Ward', 'elijah.ward@example.com', 8765432109, '777 Pine Lane', NULL, 'Texas', 'Dallas', 54321, 'Note for Company 23', NOW(), NOW()),
  ('Company 24', 'Moving', 22, 'Flatbed', 'Flatbed', '2024-12-01', 'Aria', 'Fisher', 'aria.fisher@example.com', 3456789012, '888 Elm Street', NULL, 'Florida', 'Orlando', 98765, 'Note for Company 24', NOW(), NOW()),
  ('Company 25', 'Delivery', 18, 'Box Van', 'Box Van', '2025-01-01', 'Jackson', 'Hill', 'jackson.hill@example.com', 5678901234, '999 Maple Avenue', NULL, 'Arizona', 'Phoenix', 12345, 'Note for Company 25', NOW(), NOW());

-- Commit the transaction
COMMIT;
