import { MongoClient } from 'mongodb';

// Connection URI
const uri = 'mongodb://localhost:27017'; // Thay đổi địa chỉ và cổng của MongoDB server nếu cần

// Tạo một MongoClient mới
const client = new MongoClient(uri);

// Kết nối tới MongoDB Server
async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to the database');
        
        // Gọi hàm để lấy collection Experiencs sau khi kết nối thành công
        await getExperiencesCollection();
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

async function getExperiencesCollection() {
    try {
        const db = client.db('movies'); // Thay 'yourDatabaseName' bằng tên cơ sở dữ liệu của bạn
        const collection = db.collection('Experiencs');
        const experiences = await collection.find({}).toArray();
        console.log('Experiences:', experiences);
    } catch (error) {
        console.error('Error fetching experiences:', error);
    }
}

// Gọi hàm kết nối đến MongoDB
connectToDatabase();

export {getExperiencesCollection};