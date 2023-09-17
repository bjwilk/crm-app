use crmdb;

-- seed.sql

-- Insert 25 accounts with random data
INSERT INTO `Accounts` (`companyName`, `businessType`, `fleetSize`, `equipmentType`, `lookingFor`, `lastPurchased`) 
VALUES ('Company 1', 'Landscaping', 10, 'Sleeper', 'Sleeper', '2023-09-01'),
  ('Company 2', 'Freight Hauling', 20, 'Day Cab', 'Day Cab', '2023-08-15'),
  ('Company 3', 'Construction', 5, 'Flatbed', 'Flatbed', '2023-07-20'),
  ('Company 4', 'Moving', 15, 'Box Van', 'Box Van', '2023-06-10'),
  ('Company 5', 'Construction', 30, 'Dump truck', 'Dump truck', '2023-05-05'),
  ('Company 6', 'Freight Hauling', 8, 'Water truck', 'Water truck', '2023-04-02'),
  ('Company 7', 'Construction', 25, 'Service Truck', 'Service Truck', '2023-03-15'),
  ('Company 8', 'Freight Hauling', 12, 'Sleeper', 'Sleeper', '2023-02-28'),
  ('Company 9', 'Landscaping', 40, 'Day Cab', 'Day Cab', '2023-02-10'),
  ('Company 10', 'Freight Hauling', 2, 'Flatbed', 'Flatbed', '2023-01-20'),
  ('Company 11', 'Delivery', 1, 'Box Van', 'Box Van', '2022-12-05'),
  ('Company 12', 'Construction', 7, 'Dump truck', 'Dump truck', '2022-11-15'),
  ('Company 13', 'Landscaping', 18, 'Water truck', 'Water truck', '2022-10-25'),
  ('Company 14', 'Freight Hauling', 22, 'Service Truck', 'Service Truck', '2022-10-10'),
  ('Company 15', 'Landscaping', 3, 'Water truck', 'Water truck', '2022-09-18'),
  ('Company 16', 'Freight Hauling', 11, 'Day Cab', 'Day Cab', '2022-08-30'),
  ('Company 17', 'Delivery', 6, 'Flatbed', 'Flatbed', '2022-08-05'),
  ('Company 18', 'Moving', 14, 'Box Van', 'Box Van', '2022-07-20'),
  ('Company 19', 'Landscaping', 35, 'Dump truck', 'Dump truck', '2022-07-10'),
  ('Company 20', 'Freight Hauling', 9, 'Water truck', 'Water truck', '2022-06-22'),
  ('Company 21', 'Landscaping', 27, 'Service Truck', 'Service Truck', '2022-06-08'),
  ('Company 22', 'Freight Hauling', 4, 'Sleeper', 'Sleeper', '2022-05-15'),
  ('Company 23', 'Landscaping', 17, 'Day Cab', 'Day Cab', '2022-05-01'),
  ('Company 24', 'Delivery', 13, 'Flatbed', 'Flatbed', '2022-04-10'),
  ('Company 25', 'Moving', 28, 'Box Van', 'Box Van', '2022-03-25');
