require('dotenv').config()

// const cohort1 = process.argv[2]
// const user = process.env.USERDOMAIN
const express = require('express')
const app = express()
const port = process.env.PORT || 9000

// if (cohort1 === 'web-49') {
//     console.log(`${cohort1} is the best forever!`)
// } else {
//     console.log(`booooh cohort ${cohort1}`)
// }

console.log(`the user is ${user}`)

app.get(`/hello`, (req, res) => {
    res.json ({message: `yo what up`})
})
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})