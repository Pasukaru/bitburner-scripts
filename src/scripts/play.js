/*

This file is what will eventually become the master daemon that plays the game
fully on its own (as much as that is possible). This daemon will need to be
run once at the start of each reset (installing augmentations and anything else
that resets the game).

This script will be responsible for controlling subsystems that manage:

- Getting from the initial ~$1,000 to a point where playing the stock market is viable.
- Purchasing and upgrading hacknet nodes whenever it makes financial sense.
- Playing the stock market.
- Cleaning up servers (copying .lit files to `home` and removing them from their servers).
- Rooting servers and hacking them (weaken, grow, hack).
- Solving contracts.
- Building/buying programs for opening ports.
- Periodically reporting stats (net worth, contracts solved since last report, contracts failed/unsolved, etc).
- Anything else you can script with the API (bladeburner, corporation, formulas, gang, sleeve, stanek).

This program will also need to be able to handle upgrades, so subsystems should be
"hot swappable" in a way.

Another nice feature would be to be able to send data to an external server for things
like reporting net worth over time (e.g. in a chart of the last day/12 hours/hour/15 mins, etc).

*/
