//CRUD create read update delete data
const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName= 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)

    // To create data for database (insertOne/insertMany)

    db.collection('task').insertMany([
        {
            description: "New task added",
            completed: true
        },
        {
            description: "New second task added",
            completed: false
        }
    ])

    // To read from database (findOne/find)

    db.collection('task').findOne({
        completed: true
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // To update from database (updateMany/updateOne)

    db.collection('task').updateMany({
        _id: new ObjectID('5fbcdbfd012d882309970067')
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // To delete from database (deleteMany/deleteOne)

    db.collection('task').deleteMany({
        description: 'This is the first task'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})