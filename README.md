# chipled
Toggle CHIPs status LED through REST via Node.js. Read more about CHIP at the Next Thing Co (NTC) website: http://getchip.com/pages/chip

Thought I'd make a quick test running node.js on the chip and what better way than to blink the on-board LED which is accessible on the i2c-bus :)

Clone this repository and cd into the repository folder, then make some binaries to toggle the LED:s (from http://wiki.geeky-boy.com/w/index.php?title=CHIP_Proj1)
```
sudo apt-get update  # Repair things that that seem to be a little sick.
sudo apt-get upgrade
sudo apt-get install build-essentials

# Add i2c to groups for user chip
sudo usermod -a -G i2c chip

```
Install node.js and npm by following the instructions at https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions to get the most up to date LTS release.

Then install the dependencies
```
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
