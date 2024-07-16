import { writable, derived , get } from 'svelte/store';
import { persisted } from 'svelte-persisted-store'
import testnet from '$lib/testnet.js'
import mainnet from '$lib/mainnet.js'
import * as utils from '$lib/utils.js'

const contracts = {testnet, mainnet}
const CURRENT_NETWORK = "mainnet"

let now = new Date();
const init_date = new Date(now.getTime() + 1000);

export const provider = writable();
export const connected = writable(false);
export const installed = writable(true);
export const signer = writable(null)
export const selectedAccount = writable("");
export const sending_tx = writable(false)
export const currentContract = writable(contracts[CURRENT_NETWORK])

export const EPOCH = persisted('EPOCH', "0")
export const percentDestroyed = derived(
	EPOCH, ($EPOCH) => {
	
	const originalSupply = contracts[CURRENT_NETWORK].original_supply
	const newSupply = utils.calculateNewSupply(originalSupply, $EPOCH)

	console.log({EPOCH: $EPOCH, originalSupply, newSupply})

    const percentage = BigInt(100) - (newSupply * BigInt(100)) / BigInt(originalSupply);
    return percentage.toString();
}, BigInt("0"));

export const nextRebaseAvailable = writable(init_date)
export const nextRebaseDelaySec = writable(0)
export const disableButton = writable(false)

function enableButton(){
	disableButton.set(false);
}

export const secondsToNextRebase = derived(
	[nextRebaseDelaySec, disableButton], 
	([$nextRebaseDelaySec, $disableButton], set) => {

	//console.log("called " + $disableButton + ", " + $nextRebaseDelaySec)

	var interval;

	if (!$disableButton){
		if (interval) clearInterval(interval);
		set(0);
		return;
	}

    function startCountdown(seconds) {
        set(seconds);

        interval = setInterval(() => {
            if (seconds > 0) {
                seconds--;
                set(seconds);
            } else {
				enableButton();
                clearInterval(interval);
            }
        }, 1000);
    }

    if ($nextRebaseDelaySec > 0) {
        startCountdown($nextRebaseDelaySec);
    } else {
        set(0);
    }

    return () => {
        if (interval) clearInterval(interval);
    };
}, 0);