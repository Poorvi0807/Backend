const Notice = require("../models/notice");

const createNotice=async(req,res) =>{
    const{ title,body, category} =req.body;
    const UserId=req.user.userId;
    try {
        const hashedPassword=await bcrypt.hash(password,10);
        const notice = new Notice({
            title,
            body,
            category,
            user:userId
        }) 
        await notice.save();
        return res.send({msg : "Notice Created Successfully"});
    } catch (error) {
        return res.send({msg : "Error in Notice Part"});
    }
}


const updateNotice=async(req,res) =>{
    const{title,body,category}= req.body;
    const noticeId= req.params.id;
    try {
        const notice= await Notice.findByIdAndUpdate(noticeId,{title,body,category},{new:true} );
        return res.send({msg : "Notice Updated Successfully"});
    } catch (error) {
        return res.send({msg : "Error in NoticeUpdate Part"});
    }
}

const deleteNotice=async(req,res) =>{

    const noticeId= req.params.id;
    try {
        const notice= await Notice.findByIdAndUpdate(noticeId,{title,body,category},{new:true} );
        return res.send({msg : "Notice Deleted Successfully"});
    } catch (error) {
        return res.send({msg : "Error in NoticeUpdate Part"});
    }
}

module.exports={createNotice,updateNotice,deleteNotice};