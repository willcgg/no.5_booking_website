# no.5_booking_website
## Purpose
A direct booking website for a short-term rental property.
## Design

### Key Users

This application will mainly be used by guests staying in my short-term rental property to book future stays or extend current stays. The users will need to be able to check availability and book dates they require easily. New guests that haven't stayed in the property before will need to be able to clearly see pictures of where they would be staying along with any extra information needed once they have booked the space. Such as lockbox codes, parking information, electricity meter etc.

For inspiration for this project, I will be looking at the competition such as Airbnb to see what they have done well for their users.

### User Stories

New users will need to be able to view the property and its amenities, features, location and availability to see whether they would like to stay there.

Current guests will need to be able to easily extend their stay should availability allow for it.

Past guests will need to be able to easily view availability for future stays and book for their chosen dates.

The property will NEVER be double booked e.g. booked on Airbnb & direct booking sites simultaneously.

Guests should be able to leave a review for potential future guests to read.

### Requirements

| Must Have             | Should Have           | Could Have    | 
| -------------         | -----------           | ----------    |
| Calendar              | Amenities             | Host Info     |
| Photos                | Rough Map Location    | Reviews       |
| Accept Bookings       | House Rules           |               |
| Means of Contact      | Property Description  |               |
| Connected Calendar    | Safety Info           |               |


### User Interface
The client UI will be done with NextUI, a react library which allows you to build aesthetically pleasing, modern, and fast front-ends with limited design experience. This will allow users to browse different properties listed on the site, and view availability and price for their desired dates. 

### Routing
Routing within the application for client side will be handled by a navbar created with the NextUI library alongside NextJS' file-system based Pages Router. Api routes will be handled by NextJS allowing me to fetch any data needed from the database such as booking or property information and communicate this to the clinet in a JSON response.

### Data Fetching
where the data lives and how to get it.

### Rendering
when and where I render static or dynamic content.

### Integrations
what third-party services I use (CMS, auth, payments, etc) and how you connect to them.

### Infrastructure
where I deploy, store, and run my application code (Serverless, CDN, Edge, etc).

### Performance 
how to optimize my application for end-users.

### Scalability 
how my application adapts as data and traffic grow.

### Developer Experience 
my experience building and maintaining your application.
