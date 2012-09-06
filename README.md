Files can be downloaded here: http://cl.ly/3s3A0o3x133y3k093D1q
This is a front end assignment designed to judge how skillfully you can implement a detailed, interactive UI that is highly functional and cleanly built. You have three hours to make as much progress as possible. If you finish early, you can submit it early or add your own creative flare to it. You can work on the various parts of the assignment in any order that you please, but it’s most important to nail the functionality.

You may use any libraries, frameworks, or existing code that you like. At the end of the three hours, reply to this email with your code in a single zip file. After you submit your code, please send a follow up email with any notes on what wasn't completed, what you found difficult, and any judgment calls you made.  Target the latest stable WebKit / Firefox release.

We will be paying special attention to the following:
Time management / prioritization
Object-oriented Javascript
Semantic HTML
Clean CSS
Graceful degradation
Attention to detail / design sense

Assignment

Implement a page that renders Airbnb search results according to the attached mockup and spec. The requirements are below. Implement unspecified UI interactions as you see fit.  Think about what constitutes a minimum viable product in terms of functionality and start there.
Render a list of search results using JSONP from http://assets.airbnb.com/frontend/search_results.js The JSONP callback is search_results.
The form should submit via GET to http://www.airbnb.com/search, using the parameter names: location, checkin, checkout, number_of_guests
The form should pass these validations:
Location cannot be blank.
Cannot submit a checkin without checkout.
All image assets are provided or given as URLs in the JSON; the rest should be styled only via CSS.
The search result should link to http://www.airbnb.com/rooms/<listing_id>.
Add a date picker for dates.
Guest dropdown should have options 1-16.