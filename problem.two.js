// তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে। এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।

function evenOdd(name) {

    if (name.length % 2 === 0) {
        console.log('even')
    }
    else {
        console.log('odd')
    }

}

evenOdd('chatgpt');
