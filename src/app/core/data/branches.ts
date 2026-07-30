export interface Branch {
  city: string;
  address: string;
  contact: string;
  phones: string[];
  type: string;
  email?: string;
}

export const BRANCHES: Branch[] = [
  {
    city: 'Head Office — Sonauli',
    address: 'Near India Bus Park, Sonauli, Maharajganj (U.P) 273308',
    contact: 'Amit (General Manager)',
    phones: ['+91 94529 38895', '+91 98382 75134'],
    type: 'Head Office',
    email: 'info@shrikrishnalogistics.in',
  },
  { city: 'Surat', address: 'Godown No. 65,66 Niyol Transport Nagar', contact: 'Mr. Virendra Sahani', phones: ['+91 80901 09666', '+91 80901 09555'], type: 'Booking Office' },
  { city: 'Ahmedabad', address: 'City Mill Compound Kankaria Road', contact: 'Mr. Sonu Saha', phones: ['+91 85459 45777', '+91 85459 28777'], type: 'Booking Office' },
  { city: 'Narol', address: '20 T.P. Nagar', contact: 'Mr. Anoop', phones: ['+91 85459 45777', '+91 85459 28777'], type: 'Booking Office' },
  { city: 'Jetpur', address: 'T.P. Nagar', contact: 'Mr. Mohsin Bhai', phones: ['+91 90334 08927'], type: 'Own Office' },
  { city: 'Kanpur', address: '133/118 Popular Dharm Kanta National TPT', contact: 'Mr. Shri Prakash', phones: ['+91 80901 15333'], type: 'Frenchies' },
  { city: 'Bhiwandi', address: 'Gala No. 9 Mandhvi Compound', contact: 'Mr. Ramakant', phones: ['+91 85459 05999'], type: 'Own Office' },
  { city: 'Delhi', address: 'Shop No. 6 Rajindra Market', contact: 'Mr. Mukesh Agrawal', phones: ['+91 98105 54599', '+91 80901 13555'], type: 'Own Office' },
  { city: 'Ludhiana (Khwaja Kothi)', address: 'Div 3, Khwaja Kothi Road', contact: 'Mr. Amarnath', phones: ['+91 98885 15425', '+91 98776 51714'], type: 'Own Office' },
  { city: 'Ludhiana (Transport Nagar)', address: 'Plot No. 2911, Transport Nagar', contact: 'Mr. Pankaj Sharma', phones: ['+91 98145 13388', '+91 98776 51714'], type: 'Own Office' },
  { city: 'Amritsar', address: 'Plot No. 566, Gali No. 2 Sultanwind Road', contact: 'Mr. M.K. Sharma', phones: ['+91 80543 16647', '+91 98145 13388'], type: 'Delivery Office' },
  { city: 'Pali', address: '11A, T.P. Nagar, Pali-Marwar', contact: 'Mr. Umaid Singh', phones: ['+91 93520 10201', '+91 94139 10201'], type: 'Own Office' },
  { city: 'Balotra', address: '4th Phase T.P. Nagar', contact: 'Mr. Devi Singh', phones: ['+91 97989 55390', '+91 92512 21183'], type: 'Frenchies' },
  { city: 'Bhilwara', address: '118 T.P. Nagar', contact: 'Mr. Laxman Singh', phones: ['+91 94603 33703'], type: 'Own Office' },
  { city: 'Jaipur', address: 'J. 167, Fateh Tibba Marg Moti Dungari Road', contact: 'Mr. K.S. Bhati', phones: ['+91 96510 25994'], type: 'Frenchies' },
  { city: 'Gorakhpur', address: 'T.P. Nagar', contact: 'Mr. D.K. Sharma', phones: ['+91 80901 15222', '+91 95061 76750'], type: 'Own Office' },
  { city: 'Khalilabad', address: 'Industrial Area, Road No. 19, House No. D 75', contact: 'Mr. Avnish Mishra', phones: ['+91 99353 30353', '+91 73176 25003'], type: 'Own Office' },
  { city: 'Nautanwa', address: 'Ward No. 13, Mahendra Nagar', contact: 'Mr. Virendra Maddhesiya', phones: ['+91 80901 20111', '+91 88535 26405'], type: 'Own Office' },
  { city: 'Raxaul', address: 'Bhatia Colony, Near India Custom', contact: 'Mr. Vivek Sahani', phones: ['+91 80901 20777', '+91 96517 62143'], type: 'Own Office' },
  { city: 'Rupadiha', address: 'Near Maruti Suzuki Showroom', contact: 'Mr. Vipin', phones: ['+91 80901 13666', '+91 99190 26331'], type: 'Own Office' },
  { city: 'Anand Nagar', address: 'Near Dhani Dhala Hanuman Mandir', contact: 'Mr. Anoop Chaudhary', phones: ['+91 80901 22555', '+91 76190 22607'], type: 'Own Office' },
  { city: 'Maharajganj', address: 'Rajeev Nagar, Jila Udhyog', contact: 'Mr. Neeraj', phones: ['+91 80901 22666', '+91 95656 45431'], type: 'Own Office' },
  { city: 'Shiswabazar', address: 'Sarkari Hospital, Cold Storage', contact: 'Mr. Guddu Baba', phones: ['+91 99562 49364'], type: 'Own Office' },
  { city: 'Nichlaul', address: 'Near Chowk, Nichlaul Bazaar', contact: 'Mr. Vikas Verma', phones: ['+91 81270 86811'], type: 'Own Office' },
  { city: 'Bansi', address: 'Azad Chowk, Mangal Bazaar Road', contact: 'Mr. Sandeep Kumar', phones: ['+91 99188 93951'], type: 'Own Office' },
  { city: 'Naugarh', address: 'Khan Transport Agency, Lumbini Near Taxi Stand', contact: 'Mr. Sajarat Ali', phones: ['+91 95616 61642'], type: 'Own Office' },
  { city: 'Barhni', address: 'Barhni Chauraha, Near New Malik Transport', contact: 'Mr. Bhallu', phones: ['+91 96281 26747'], type: 'Own Office' },
  { city: 'Sonauli', address: 'Near India Bus Park', contact: 'Mr. Chandan Jaiswal', phones: ['+91 91293 73126'], type: 'Own Office' },
];
