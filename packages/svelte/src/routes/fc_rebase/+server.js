import { json } from '@sveltejs/kit';
import util from 'util';
import mainnet from '$lib/mainnet.js'
import { encodeFunctionData } from 'viem';

const calldata = encodeFunctionData({
	abi: mainnet.abi,
	functionName: 'rebase',
	args: []
  });


/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	console.log(util.inspect(request, { showHidden: true, depth: null, colors: false }));
	const txInfo = {
		chainId: "eip155:8453",
		method: "eth_sendTransaction",
		params: {
			to: "0xE5FaDd0bcBdf5FBCDac7d3823c27133D8ed60b5a",
			abi: mainnet.abi,
			data: calldata
		},
	}
	return json(txInfo);
}