# Automated-Climate-Control-System


Research:


Commercial & Enterprise Systems:

These are established greenhouse monitoring solutions used in agriculture and commercial farming:

Netafim IoT Irrigation & Climate Control
Features: Real-time soil moisture monitoring, automated water scheduling, cloud analytics, smart irrigation optimization. 
Monnit Remote Monitoring System
Features: Wireless sensors for temperature, humidity, soil moisture with alerts, cloud dashboard for remote access. 

IoX-Connect IoT Greenhouse Solutions
Features: Sensors + automated irrigation, lighting, climate controls, scalable platform for small to large greenhouses. 

Priva / Climate Corporation / Trimble greenhouse systems 
features: Full greenhouse climate automation — environmental sensing, irrigation automation.


Our edge over them:

1.Cost-Effectiveness
a. Commercial systems can be expensive. our ESP32 + open dashboard can be much cheaper.
b. DIY products are low cost but often lack automation or scalable web interface.

2.Custom Web Dashboard
Most hobby projects use platforms like Blynk or ThingsBoard, but building a custom website gives:
a.	Full design control that is tailored to greenhouse needs
b.	No dependency on third-party dashboards
c.	Ability to add alerts, history graphs, multi-user access

3.Modularity & Expandability
a.	We can add Additional sensors (CO₂, pH, EC, etc.)
b.	Actuators (fans, heaters, irrigation valves)
c.	Predictive models (alerts based on trends)


Business Model: Smart Greenhouse Automation:

1. Value Proposition
1.	Affordability: High-end automation at a fraction of industrial costs.
2.	Precision: Automated climate control (Temp/Humidity), irrigation (Soil Moisture) and light control (UV Lights) to maximize crop yield.
3.	Accessibility: A remote React-based dashboard for monitoring and manual control from anywhere.
4.	Research-Ready: One-click Excel export from MongoDB for historical data analysis and growth optimization.

2. Revenue System:
1.	Hardware Sales: Buying all the hardware in bulk from the whole seller and make the whole setup in low cost.
2.	Freemium Software:
-	Basic (Free): Real-time monitoring and local automation.
-	Pro (Subscription): Monthly fee for cloud storage of historical data, advanced analytics, and remote manual override.
3.	B2B Consultation: Custom greenhouse setups for schools, nurseries, and boutique organic farms.

3. Stakeholders:
1.	Urban Farming: Urban small scaled farms in balcony or terrace gardens.
2.	Boutique Farmers: Growers of high-value crops like microgreens, mushrooms, or exotic flowers.
3.	Aquaponic Farms: Use water instead of soil to grow plants.
4.	Farmers using greenhouses: To provide favourable conditions in very bad climatic conditions.

4. Cost Structure:
1.	Manufacturing: Mass-sourcing of ESP32 modules and sensors.
2.	Cloud Infrastructure: MongoDB Atlas and Node.js hosting costs.


Technical Implementation Details:

Technical Implementation Details
The Smart Greenhouse Monitoring and Control System is designed to monitor environmental parameters and automatically control greenhouse devices using an ESP32 microcontroller.
The system continuously senses temperature, humidity, soil moisture, and sunlight intensity and controls actuators such as fan, water pump, mist sprayer, and grow light through a relay module.
All sensor data can be transmitted to a web dashboard for remote monitoring.

1. Microcontroller Unit (ESP32)
ESP32 acts as the central processing unit
Features:
a. Dual-core processor
b. Built-in Wi-Fi
c. Multiple GPIO & ADC pins
•	Handles:
a. Sensor data acquisition
b. Decision making
c. Relay control
d. Data transmission to server
2.Sensors
•	Temperature & Humidity Sensor (DHT22)
Connected to GPIO 4
Operates on 3.3V
Provides digital output
Used to monitor:
Ambient temperature and Relative humidity
Function:
Helps regulate fan and misting system based on temperature and humidity threshold


•	Soil Moisture Sensor
Analog output connected to GPIO 34
Powered using VCC & GND
Measures moisture content of soil
Function:
Triggers the water pump when soil moisture drops below a predefined level.

•	Light Sensor (LDR Module)
Connected to GPIO 32
Works on 3.3V
Provides analog light intensity values
Function:
Controls grow lights based on sunlight availability.

•	Relay Module Interfacing
Relay Module Specifications
4-Channel Relay Module
Operates on 5V
Provides electrical isolation between ESP32 and high-power devices
GPIO Connections
Relay Channel	ESP32 GPIO	Controlled Device
Relay 1	GPIO 13	Fan
Relay 2	GPIO 24	Water Pump
Relay 3	GPIO 14	Mister
Relay 4	GPIO 27	Grow Light



5. Actuator Control Logic
Parameter	Condition	Action
Temperature	Above threshold	Fan ON
Humidity	Below threshold	Mister ON
Soil Moisture	Dry soil	Pump ON
Light Intensity	Low sunlight	Grow Light ON

Relay switching is controlled through digital HIGH/LOW signals from ESP32 GPIO pins.

6. Power Supply
•	ESP32 powered via USB / Vin
•	Sensors powered using 3.3V
•	Relay module powered using 5V
•	External loads (fan, pump, light) powered independently via relay contacts

7. Firmware Implementation
•	Developed using Arduino IDE
•	Language: Embedded C/C++
•	Major functions:
a. Sensor initialization
b. GPIO configuration
c. Data reading & processing
d. Threshold comparison
e. Relay activation
f. Wi-Fi communication (optional)

8. Control Algorithm 
a.	Read sensor values
b.	Compare readings with preset thresholds
c.	Activate corresponding relay
d.	Send sensor data to web server
e.	Repeat process continuously


