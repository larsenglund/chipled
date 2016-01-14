# chipled
Toggle CHIPs status LED through REST via Node.js. Read more about CHIP at the Next Thing Co (NTC) website: http://getchip.com/pages/chip

Thought I'd make a quick test running node.js on the chip and what better way than to blink the on-board LED which is accessible on the i2c-bus :)

Clone this repository and cd into the repository folder, then make some binaries to toggle the LED:s (from http://wiki.geeky-boy.com/w/index.php?title=CHIP_Proj1)
```
sudo apt-get update  # Repair things that that seem to be a little sick.
sudo apt-get upgrade
sudo apt-get install -f locales
sudo locale-gen en_US en_US.UTF-8
sudo dpkg-reconfigure locales    # Select "en_US" locales.
sudo apt-get install gcc make  # Get the C compiler

sudo gcc -o on on.c  # Compile
sudo gcc -o off off.c
sudo chmod +s on  # Allow executables to run with root privilage
sudo chmod +s off
```
Install node.js, npm and dependecies for the project
```
sudo apt-get install nodejs
sudo apt-get install npm
npm install
```
And start the server
```
nodejs chipled.js
```
You should now be able to toggle the white on-board LED using the following URLs:
* Turn ON: http://chip.local:3700/api/on
* Turn OFF: http://chip.local:3700/api/off
* Test API: http://chip.local:3700/api

Time to build something a bit more interesting with this CHIP :)
