// TODO: Declare any global variables we need [DONE O]
let rollsheads = 0
let rollstails = 0
// understanding the code. jeez loius
//console logs just in case

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // [KEEPING THE CONSOLE SO i CAN CHECK]
    console.log('this is a healthy check up')
    document.getElementById('flip').addEventListener("click", () => {
        let Currentcoinflip = Math.round(Math.random() * 1)
        console.log(`yo, this is the number: ${Currentcoinflip}`)

    // [CHECKING LISTENERS]

    // cOIN FLIPPER!
        // it determines the outcome!
        if (Currentcoinflip) {
                // this ones heads
            document.getElementById('penny-image').src='assets/images/penny-heads.png'
        document.getElementById('message').textContent = "Kobold Heads. Nice"
        rollsheads += 1
    }
    else {
            // this here is tails
        document.getElementById('penny-image').src='assets/images/penny-tails.png'
        document.getElementById('message').textContent = " Good land, The Fox's Tail. "
        rollstails += 1
    }
    // tallies up for the percentages
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
    // this clears up everything. :)
    document.getElementById('clear').addEventListener('click', function () {
        rollsheads = 0
        rollstails = 0

        // Updates the message with a sad face
        document.getElementById('penny-image').src='assets/images/penny-sad.png'
        document.getElementById('message').textContent = 'you reset it, how could you? this kobold is sad now'


        
        // Calculates for the fancy percentage and stuff
        let totalrolls = rollsheads + rollstails

        // created fancy variables
        let percentageheads = 0
        let percentagetails = 0

        // double checked, had a few mispellings, but alls good!
        if (totalrolls > 0) {
            // Calculate percentage of both sides of the coin
            percentHeads = Math.round((rollsheads / totalrolls) * 100)
            percentTails = Math.round((rollstails / totalrolls) * 100)
        }

        // Updates...or clears up the board as it's the clear button
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
