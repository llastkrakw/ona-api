
exports.selectAll =  (req, res) => {

    try {

        res.send("NOT IMPLEMENTED : collection list");
        
    } catch (error) {
        res.status(500).send(error);
    }

}


exports.selectCollection = async (req, res) => {

    try {

        res.send("NOT IMPLEMENTED : select collection " + req.params.id);
        
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.addCollection = async (req, res) => {

    try {

        res.send("NOT IMPLEMENTED : add collection");
        
    } catch (error) {
        res.status(500).send(error);
    }

}

exports.deleteCollection = async (req, res) => {

    try {

        res.send("NOT IMPLEMENTED : delete collection");
        
    } catch (error) {
        res.status(500).send(error);
    }

}


exports.updateCollection = async (req, res) => {

    try {

        res.send("NOT IMPLEMENTED : updatecollection");
        
    } catch (error) {
        res.status(500).send(error);
    }

}
