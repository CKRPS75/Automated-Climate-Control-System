# Automated-Climate-Control-System

## Introduction:

  - A smart Automated-Climate-System designed to automatically maintain optimal conditions for agriculture and microbiological culture under controlled environment.
  - Monitors temperature, humidity, soil moisture, and light intensity in real time.
  - Automatically controls devices such as fans, water pumps, humidifier, and grow lights.
  - Provides a cost-effective, modular, and scalable alterative to expensive commercial systems.
  - Built using an ESP32 microcontroller and a custom web-based dashboard.
  - Supports both automatic operation and remote monitoring.
  - Suitable for research students, researchers, urban farmers, and small-to-medium Automated-Climate-Control-System setups.
  - Acts as a research platform and a foundation for smart agriculture and agritech applications.

## Research:


Commercial & Enterprise Systems:

These are established greenhouse monitoring solutions used in agriculture and commercial farming:

### Netafim IoT Irrigation & Climate Control
  - Real-time soil moisture monitoring
  - Automated irrgigation scheduling
  - Cloud-based analytics and optimization
  
### Monnit Remote Monitoring System
  - Wireless temperature, humidity, and soil sensors
  - Alert system
  - Cloud dashboard for remote access

### IoX-Connect IoT Greenhouse Solutions
  - Complete greenhouse climate automation
  - Enviromental sensing
  - Automated irrigation systems 

### Priva / Climate Corporation / Trimble
  - Complete greenhouse climate automation
  - Environmental sensing
  - Automated irrigation systems 


## Our edge over them:

### 1.Cost-Effectiveness
  - Commercial systems are expensive.
  - ESP32-based solution with open dashboard significantly reduces cost.
  - DIY projects are cheap but often lack automation and scalability.

### 2.Custom Web Dashboard
Most hobby projects use platforms like Blynk or ThingsBoard, but building a custom website gives:
  -	Full design control that is tailored to greenhouse needs
  - No dependency on third-party dashboards
  - Ability to add alerts, history graphs, multi-user access

### 3.Modularity & Expandability
  - Easy integration of additional sensors (CO2, pH, EC).
  - Supports multiple actuators (fans, heaters, irrigation valves).
  - Ready for future predictive and trend-based alerts.


## Business Model: Smart Automated-Climate-System:

1. Value Proposition
   -	Affordability: High-end automation at a fraction of industrial costs.
   -	Precision: Automated climate control (Temp/Humidity), irrigation (Soil Moisture) and light control (UV Lights) to maximize crop yield.
   -	Accessibility: A remote React-based dashboard for monitoring and manual control from anywhere.
   -	Research-Ready: One-click Excel export from MongoDB for historical data analysis and growth optimization.

2. Revenue System:
   -	Hardware Sales: Buying all the hardware in bulk from the whole seller and make the whole setup in low cost.
   -	Multiple Product Variants (Tiered Model):
       - Basic Model- Our complete hardware system + Live Feed View on the Web App.
    	 - Pro Model- Basic model + Manual Control + Higher Accuracy.
       - Ultra Model- Standard model + option download past parameters in an excel sheet, .csv format file + Highest accuracy + future AI features.
   -	B2B Consultation: Custom Automated-Climate-Control-System setups for schools, nurseries, and boutique organic farms.

3. Stakeholders:
   -	Urban Farming: Urban small scaled farms in balcony or terrace gardens.
   -	Boutique Farmers: Growers of high-value crops like microgreens, mushrooms, or exotic flowers.
   -	Aquaponic Farms: Use water instead of soil to grow plants.
   -	Farmers using Automated-Climate-Control-System: To provide favourable conditions in very bad climatic conditions.

4. Cost Structure:
   -	Manufacturing: Mass-sourcing of ESP32 modules and sensors.
   -  Cloud Infrastructure: MongoDB Atlas and Node.js hosting costs.


## Technical Implementation Details:

The Automated-Climate-Control System is designed to monitor environmental parameters and automatically control connected devices using an ESP32 microcontroller. The system continuously senses temperature, humidity, soli moisture, and light intensity, and controls actuators such as fans, water pumps, humidifier, and grow lights through a relay module. All sensor data is Transmitted to our mongodb database which is then uploaded to our web-based dashboard for real-time and remote monitoring.

1. Microcontroller Unit (ESP32)
ESP32 acts as the central processing unit
Features:
  - Dual-core processor
  - Built-in Wi-Fi
  - Multiple GPIO & ADC pins
•	Handles:
  - Sensor data acquisition
  - Decision making
  - Relay control
  - Data transmission to server
2.Sensors
•	Temperature & Humidity Sensor (DHT22)
  - Connected to GPIO 4
  - Operates on 3.3V
  - Provides digital output
  - Used to monitor:
  - Ambient temperature and Relative humidity
Function:
  - Helps regulate fan and misting system based on temperature and humidity threshold


3.Soil Moisture Sensor
  - Analog output connected to GPIO 34
  - Powered using VCC & GND
  - Measures moisture content of soil
Function:
  - Triggers the water pump when soil moisture drops below a predefined level.

4.Light Sensor (LDR Module)
  - Connected to GPIO 32
  - Works on 3.3V
  - Provides analog light intensity values
Function:
  - Controls grow lights based on sunlight availability.

•	Relay Module Interfacing
  - Relay Module Specifications
  - 4-Channel Relay Module
  - Operates on 5V
  - Provides electrical isolation between ESP32 and high-power devices
GPIO Connections
   | Relay Channel	| ESP32 GPIO	| Controlled Device |
   | Relay 1	| GPIO 13 |	Fan |
   | Relay 2	| GPIO 24	| Water Pump |
   | Relay 3  |	GPIO 14	| Mister |
   | Relay 4	| GPIO 27	| Grow Light |



5. Actuator Control Logic
  - Parameter	Condition	Action
  - Temperature	Above threshold	Fan ON
  - Humidity	Below threshold	Mister ON
  - Soil Moisture	Dry soil	Pump ON
  - Light Intensity	Low sunlight	Grow Light ON

Relay switching is controlled through digital HIGH/LOW signals from ESP32 GPIO pins.

6. Power Supply
  - ESP32 powered via USB / Vin
 	- Sensors powered using 3.3V
  - Relay module powered using 5V
  -	DC fan and glow lights powered using 12 volts DC power supply
  -	DC water pump powered using 9 volts battery
  -	Humidifier powered via USB

7. Firmware Implementation
  - Developed using Arduino IDE
  -	Language: Embedded C/C++
  - Major functions:
      - Sensor initialization
      - GPIO configuration
      - Data reading & processing
      - Threshold comparison
      - Relay activation
      - Wi-Fi communication

8. Control Algorithm 
  -	Read sensor values
  -	Compare readings with preset thresholds
  -	Activate corresponding relays
  -	Send sensor data to the web server
  -	Repeat continuously

Future Scope
  - Camera to monitor and record the plant/bacteria growth.
  - ML model to predict the most suitable climate conditions from past records for better results.
  - Use AI to analyze which environmental "set-points" led to the fastest growth or the most stable bacterial cultures, allowing the system to suggest optimal parameters automatically.
  - Use image processing to identify early signs of leaf yellowing, mold, or contamination in a lab setting, triggering an automatic alert or quarantine protocol.
  - Make custom setups according to the customer’s special requirements. 
  - Integrate CO_2 sensors for high-yield urban farming or pH/EC sensors for hydroponics and microbiology labs to provide a more complete environmental control suite.
