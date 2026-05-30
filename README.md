# Travel-Web

Travel-Web is a two-sided travel booking and inquiry platform connecting **customers** with **travel agencies** in specific cities.

## Problem It Solves
When families or groups travel to another city, they often cannot quickly find:
- trusted local travel agencies,
- contactable operators,
- vehicles matching seat, AC, and trip requirements.

Travel-Web solves this by letting customers search local agency vehicles, raise inquiries, chat with agencies, and complete bookings online.

## User Roles
- **Customer**
- **Travel Agency**

Both roles require login/authentication.

## Core Customer Features

### Search & Discovery
Customers can search by:
- City
- Travel dates
- AC / Non-AC preference
- Vehicle capacity

Supported vehicle categories:
- 7 seater
- 10 seater
- 12 seater
- 14 seater
- 17 seater
- 20 seater
- 25 seater
- 40 seater
- 56 seater

Search results should display:
- Available vehicles
- Vehicle photos
- Expected price per km
- Vehicle condition
- Vehicle details
- Customer reviews

### Inquiry Flow
Customer can:
1. Select a vehicle
2. Raise an inquiry with trip details:
   - From / To
   - Dates
   - Places to cover
   - Round trip or one-way
   - Number of days
3. Get inquiry acceptance from agency
4. Chat directly with agency in-platform
5. Use an AI assistant for support

### Booking & Payment
For confirmed trips, customer can submit:
- Passenger details
- Final trip details
- Required booking information
- Online payment

Customer receives:
- Booking confirmation details
- Payment receipt

## Core Travel Agency Features

### Agency Setup
Travel agency can:
- Create agency profile
- Add vehicles
- Upload vehicle photos
- Add vehicle details and condition
- Set city/location coverage
- Set pricing and availability

### Inquiry & Negotiation
On receiving inquiry, agency can:
- Chat with customer
- Share full trip plan and total cost breakdown
- Clarify extra charges (driver stay, meals, and other costs)

### Confirmation
After customer-agency agreement:
1. Customer pays online
2. Vehicle booking is confirmed
3. Trip is marked confirmed

## Functional Modules (Minimum)
1. Authentication module (Customer + Agency)
2. Customer search and vehicle listing module
3. Agency inventory and availability management module
4. Inquiry management module
5. Real-time/chat communication module
6. AI assistant module
7. Booking, payment, and receipt module

## Suggested Data Entities
- User
- CustomerProfile
- AgencyProfile
- Vehicle
- VehiclePhoto
- VehicleAvailability
- Inquiry
- InquiryMessage
- Booking
- Payment
- Receipt
- Review

## Out of Scope for This Initial Repository State
This repository currently contains documentation only. The above is the baseline functional specification to implement in future application code.
