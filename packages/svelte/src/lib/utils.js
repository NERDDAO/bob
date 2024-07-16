export function openSite(site) {
	window.open(site, '_blank', 'noopener,noreferrer');
}

export const formatAddress = (address) => address.slice(0, 7) + '...' + address.slice(-5);

export function getNextRebaseAvailable(timestamp, rebase_delay){
	// Convert BigInt to Number and add 60 seconds
	let nextTimestamp = Number(timestamp) + rebase_delay;

	// Create a new Date object
	return new Date(nextTimestamp * 1000);
}

export function calculateDelay(targetDate){
	// Calculate the delay in milliseconds
	let now = new Date();
	let delay = targetDate.getTime() - now.getTime();
	return delay
}

export function calculateNewSupply(original_supply, EPOCH) {
	let supply = BigInt(original_supply)

	function decreaseByOnePercent(value){
		// Scale up by 100 to maintain precision
		const scaledValue = value * BigInt(100);
	
		// Divide by 101 to approximate dividing by 1.01
		const result = scaledValue / BigInt(101);
		return result
	}
	
	for (let i = 0; i < EPOCH; i++){
		supply = decreaseByOnePercent(supply)
		//console.log({supply})
	}

	return supply
}

export function formatTime(seconds) {
    if (seconds < 60) {
        return `${seconds} seconds`;
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} minutes ${remainingSeconds} seconds`;
}


export function calculatePercentageRemoved(currentSupply, originalSupply){
	const current = parseFloat(currentSupply);
	const original = parseFloat(originalSupply);
	const percentageRemoved = ((original - current) / original) * 100;

	const strPercent = String(percentageRemoved)
	return strPercent.slice(0, 11)
}