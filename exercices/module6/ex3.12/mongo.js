const mongoose = require('mongoose')

if (process.argv.length < 3) {
 console.log('Please provide the password as an argument: node mongo.js <password>')
 process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://admin:${password}@cluster0.wtk3lmm.mongodb.net/?retryWrites=true&w=majority`

const phoneSchema = new mongoose.Schema({
    name: String,
    phone: String,
   })
   
const Phone = mongoose.model('Phone', phoneSchema)

if(process.argv.length == 3) {

    mongoose
    .connect(url)
    .then((result) => {
        console.log('connected')
        
        Phone.find({}).then(result => {
            result.forEach(phone => {
              console.log(` ${phone.name} ${phone.phone}`)
            })
            mongoose.connection.close()
        })
        
    })
    .catch((err) => console.log(err))
}
else {
    const newName = process.argv[3]
    const newPhone = process.argv[4]

    mongoose
    .connect(url)
    .then((result) => {
        console.log('connected')

        const phone = new Phone({
            name: newName,
            phone: newPhone,
        })

        return phone.save()
    })
    .then(() => {
    console.log(`added ${newName} number ${newPhone} to phonebook`)
    return mongoose.connection.close()
    })
    .catch((err) => console.log(err))
}