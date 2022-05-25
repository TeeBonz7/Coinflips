// TODO: Declare any global variables we need
let rollsheads = 0
let rollstails = 0
// understanding the code. jeez loius
//console logs just in case

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('this is a healthy check up')
    document.getElementById('flip').addEventListener("click", () => {
        let Currentcoinflip = Math.round(Math.random() * 1)
        console.log(`yo, this is the number: ${Currentcoinflip}`)

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        if (Currentcoinflip) {

            document.getElementById('penny-image').src='assets/images/penny-heads.png'
        document.getElementById('message').textContent = "Kobold Heads. Nice"
        rollsheads += 1
    }
    else {
            
        document.getElementById('penny-image').src='assets/images/penny-tails.png'
        document.getElementById('message').textContent = " Good land, The Fox's Tail. "
        rollstails += 1
    }

    let totalrolls = rollsheads + rollstails

    let percentageheads = 0
    let percentagetails = 0

    if(totalrolls > 0) {
        percentageheads = Math.round((rollsheads / totalrolls) * 100)
        percentagetails = Math.round((rollstails / totalrolls) * 100)
    }

        document.getElementById('heads').textContent = rollsheads
        document.getElementById('heads-percent').textContent = percentageheads + '%'
        document.getElementById('tails').textContent = rollstails
        document.getElementById('tails-percent').textContent = percentagetails + '%'
    })

    document.getElementById('clear').addEventListener('click', function () {
        // Reset the heads and tails values to zero
        rollsheads = 0
        rollstails = 0

        // Update the message to the user
        document.getElementById('penny-image').src='assets/images/penny-sad.png'
        document.getElementById('message').textContent = 'you reset it, how could you? this kobold is sad now'


        
        // Calculate total number of rolls
        let totalrolls = rollsheads + rollstails

        // Create variables to track percent heads and tails
        let percentageheads = 0
        let percentagetails = 0

        // Before trying to divide, make sure total is not zero
        if (totalrolls > 0) {
            // Calculate percentage of heads and tails
            percentHeads = Math.round((rollsheads / totalrolls) * 100)
            percentTails = Math.round((rollstails / totalrolls) * 100)
        }

        // Update the values in the scoreboard table
        document.getElementById('heads').textContent = rollsheads
        document.getElementById('heads-percent').textContent = percentageheads + '%'
        document.getElementById('tails').textContent = rollstails
        document.getElementById('tails-percent').textContent = percentagetails + '%'
    })

       
})
       
       
       
       
       
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
