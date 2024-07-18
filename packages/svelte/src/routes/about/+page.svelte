<div class="outlined">
<h1><u>Tokenomics of $CBDC</u></h1>
<hr>


<p >
$CBDC is a rebase token that negatively rebases whenever an Ethereum wallet with more than - CBDC tokens clicks on the rebase button on the homepage. Every time the button is pressed, 1% of the total supply is reduced equally across all wallets. This causes an imbalance in the liquidity pool on Uniswap V2, causing the price of each token to increase.
</p>
<p class="more_margin">
    <strong>But how does this work? It sounds too good to be true.</strong>
    
</p>

<p>Instead of a single balance, each wallet owns a % of the CBDC supply. The CBDC contract also has, to put it simply, a token 'multiplier' which translates the % of supply you own into a number of tokens. 

</p>
<p class="more_margin"><strong>For example:</strong></p>
<p class="boxed">
    You own 1% of supply. Current token multiplier is 1,000,000.<br>
    1% of 1,000,000 is 10,000.<br>
    <br>
    A rebase occurs that reduces the multiplier to 900,000.<br>
    <br>
    1% of 900,000 is 9,000.<br>
    You now own 9,000.</p>

<p>The thing about rebasing is that it instantly affects everyone's wallets immediately at the same time. Consider a liquidity pool on Uniswap. Uniswap prices tokens by looking at how much base currency exists (ETH) in proportion to how much quote currency (CBDC). Buying and selling changes these proportions, so it changes the price. However, so does rebasing.
</p>
<p class="more_margin"><strong> Example:</strong></p>
<p class="boxed">
    Liquidity pool owns 1% of supply and has $10,000 in it.<br>
    Current token multiplier is 1,000,000.<br>
    Liquidity pool has 10,000 tokens to $10,000. 1 token = $1.<br>
    <br>
    A rebase occurs that reduces the multiplier to 900,000.<br>
    <br>
    1% of 900,000 is 9,000.<br>
    Liquidity pool has 9,000 tokens to $10,000. 1 token = $1.11.</p>

<p>The price adjusts without any buying or selling. What's important to note here is that the market capitalization remains the same after a rebase. When you buy a token, the price increases and the market capitalization. <br><br>However, for rebasing, this is not the case. The price is now an abstract concept that relates to the amount of rebasing that has occured, and the current amount of base currency in the liquidity pool.
</p>

<h2>How to Trade</h2>
<p>Unlike traditional currencies and assets that trade within bounds, ranges, support, and resistence as it pertains to price, because price is now unshackled from market capitalization, these trading styles no longer serve any value.
</p>
<p>Saavy traders should look at the market cap of the token and their percentage of holdings to determine the most optimal strategy.
</p>

<h2>End Game</h2>
<p>
    The theoretical maximum value of CBDC is unreasonably high. There is no mathematical reason that each token can't be $1,000,000. Because no one has ever seen a token perform like this before, our goal is to shock the crypto world with the most degenerate stunt ever performed. <br><br>We want to get CBDC into the minds of every trader and initiate the 'meltup' scenario where the price of the token goes to ridiculous heights. The spectacle of it all will bring attention and hopefully buy volume into the token as we all ride the most degenerate rollercoaster to exist in crypto so far.</p>
</div>

<style>
    h1{
        margin: 2rem 0 2rem;
        text-align: center;
    }
    hr{
        margin: 0 0 2rem 0;
    }
    h2{
        margin-top: 3rem;
    }
    .more_margin{
        margin-top: 2rem;
    }
    .boxed{
        background-color: #f2f2f2;
        padding: 1em;
    }
    .outlined{
        border: 1px dashed rgb(211, 211, 211);
        padding: 0 1.5em;
        margin-bottom: 3rem;
    }
    p{
        margin: 1rem 0;
    }

    @media (min-width: 768px) {
        h1{
            text-align: left;
        }

    }

</style>