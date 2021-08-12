



import mongoose from 'mongoose';



const Connection = async () => {
    
    try {
        const URL ='mongodb://user:userdatabase@blogweb-shard-00-00.hraip.mongodb.net:27017,blogweb-shard-00-01.hraip.mongodb.net:27017,blogweb-shard-00-02.hraip.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-cnxou8-shard-0&authSource=admin&retryWrites=true&w=majority';
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;

