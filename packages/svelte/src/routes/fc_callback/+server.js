import { json } from '@sveltejs/kit';
import util from 'util';

const nextFrame = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta name="fc:frame" content="vNext">
	<meta name="fc:frame:image" content="https://www.bankofbased.com/images/fc-start.png">
	<meta name="fc:frame:image:aspect_ratio" content="1:1">
	<meta name="fc:frame:button:1" content="Buy CBDC">
	<meta name="fc:frame:button:1:action" content="link">
	<meta name="fc:frame:button:1:target" content="https://app.uniswap.org/explore/tokens/base/0xBA5eDF631828EBbe81B850F476FA5936e3C15783">
	<meta name="fc:frame:button:2" content="MAKE IT GO UP">
	<meta name="fc:frame:button:2:action" content="tx">
	<meta name="fc:frame:button:2:target" content="https://www.bankofbased.com/fc_rebase">
	<meta name="fc:frame:button:2:post_url" content="https://www.bankofbased.com/fc_callback">
</head>
<body>
	<h1>Hello, world!</h1>
</body>
</html>
`;

export async function POST({ request }) {
	console.log(util.inspect(request, { showHidden: true, depth: null, colors: false }));
	try {
		const data = await request.json();

		console.log(util.inspect(data, { showHidden: true, depth: null, colors: false }));

		return new Response(nextFrame, {
			status: 200,
			headers: {
				'Content-Type': 'text/html'
			}
		});
	} catch (error) {
		console.error('Error parsing JSON:', error);
		return new Response(JSON.stringify({ status: 'error', message: 'Invalid JSON' }), {
			status: 400,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}


