// User Schema
const userSchema = {
  _id: 'ObjectId',
  email: 'String (unique)',
  password: 'String (hashed)',
  name: 'String',
  role: 'String (customer|agency)',
  createdAt: 'Date',
  updatedAt: 'Date'
};

// Customer Profile Schema
const customerProfileSchema = {
  _id: 'ObjectId',
  userId: 'ObjectId (ref: User)',
  phone: 'String',
  address: 'String',
  city: 'String',
  createdAt: 'Date'
};

// Agency Profile Schema
const agencyProfileSchema = {
  _id: 'ObjectId',
  userId: 'ObjectId (ref: User)',
  agencyName: 'String',
  phone: 'String',
  address: 'String',
  city: 'String',
  licenseNumber: 'String',
  verificationStatus: 'String (pending|verified)',
  rating: 'Number (default: 0)',
  createdAt: 'Date'
};

// Vehicle Schema
const vehicleSchema = {
  _id: 'ObjectId',
  agencyId: 'ObjectId (ref: AgencyProfile)',
  capacity: 'Number (7|10|12|14|17|20|25|40|56)',
  acType: 'String (AC|Non-AC)',
  registrationNumber: 'String',
  condition: 'String (Good|Excellent|Fair)',
  pricePerKm: 'Number',
  city: 'String',
  photos: '[String] (URLs)',
  availableDates: '[Date]',
  createdAt: 'Date',
  updatedAt: 'Date'
};

// Inquiry Schema
const inquirySchema = {
  _id: 'ObjectId',
  vehicleId: 'ObjectId (ref: Vehicle)',
  customerId: 'ObjectId (ref: User)',
  agencyId: 'ObjectId (ref: AgencyProfile)',
  fromLocation: 'String',
  toLocation: 'String',
  startDate: 'Date',
  endDate: 'Date',
  placesToCover: '[String]',
  roundTrip: 'Boolean',
  numberOfDays: 'Number',
  acPreference: 'String (AC|Non-AC)',
  numberOfPassengers: 'Number',
  status: 'String (pending|accepted|rejected|confirmed)',
  totalCost: 'Number',
  createdAt: 'Date',
  updatedAt: 'Date'
};

// Inquiry Message Schema
const inquiryMessageSchema = {
  _id: 'ObjectId',
  inquiryId: 'ObjectId (ref: Inquiry)',
  senderId: 'ObjectId (ref: User)',
  message: 'String',
  timestamp: 'Date'
};

// Booking Schema
const bookingSchema = {
  _id: 'ObjectId',
  inquiryId: 'ObjectId (ref: Inquiry)',
  vehicleId: 'ObjectId (ref: Vehicle)',
  customerId: 'ObjectId (ref: User)',
  agencyId: 'ObjectId (ref: AgencyProfile)',
  bookingStatus: 'String (pending|confirmed|cancelled)',
  paymentStatus: 'String (pending|completed|failed)',
  bookingDate: 'Date',
  createdAt: 'Date'
};

// Payment Schema
const paymentSchema = {
  _id: 'ObjectId',
  bookingId: 'ObjectId (ref: Booking)',
  amount: 'Number',
  paymentMethod: 'String (creditcard|debitcard|upi)',
  status: 'String (pending|completed|failed)',
  transactionId: 'String',
  createdAt: 'Date'
};

// Receipt Schema
const receiptSchema = {
  _id: 'ObjectId',
  bookingId: 'ObjectId (ref: Booking)',
  paymentId: 'ObjectId (ref: Payment)',
  customerId: 'ObjectId (ref: User)',
  agencyId: 'ObjectId (ref: AgencyProfile)',
  totalAmount: 'Number',
  receiptDate: 'Date',
  receiptUrl: 'String'
};

// Review Schema
const reviewSchema = {
  _id: 'ObjectId',
  vehicleId: 'ObjectId (ref: Vehicle)',
  customerId: 'ObjectId (ref: User)',
  bookingId: 'ObjectId (ref: Booking)',
  rating: 'Number (1-5)',
  comment: 'String',
  createdAt: 'Date'
};

module.exports = {
  userSchema,
  customerProfileSchema,
  agencyProfileSchema,
  vehicleSchema,
  inquirySchema,
  inquiryMessageSchema,
  bookingSchema,
  paymentSchema,
  receiptSchema,
  reviewSchema
};
