import User from "../models/user.model";
import Message from "../models/message.model";
import cloudinary from "../lib/cloudinary";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filterUsers = await User.find({_id: {$ne: loggedInUserId}})

        res.status(200).json(filterUsers);
    } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
    try {
        const {id: userToChatId} = req.params;
        const myId = req.user._id;

        Message.find({
            $or:[
                
                { senderId: myId, receiverId: userToChatId },
                { senderId: myId, receiverId: userToChatId },
            ]
        })

        res.status(200).json(message);
    } catch (error) {
         console.log("Error in getMessages controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
    }
}

export const sendMessage = async (req, res) => {
    try {
        const {text, image} = req.body
        const { id: receiverId } = req.params
        const senderId = req.user._id

        let imageurl;
        if(image) {
        const uploadResponse = await cloudinary.uploader.upload(image);
        imageurl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: imageurl,
        });

        await newMessage.save();

    } catch (error) {
        
    }
}