
exports.selectAll =  (req, res) => {

    try {

        res.send("NOT IMPLEMENTED : link list");
        
    } catch (error) {
        res.status(500).send(error);
    }

}


exports.selectLink = async (req, res) => {

    try {

        res.send("NOT IMPLEMENTED : select link " + req.params.id);
        
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.addLink = async (req, res) => {

    try {

        res.send("NOT IMPLEMENTED : add link");
        
    } catch (error) {
        res.status(500).send(error);
    }

}

exports.deleteLink = async (req, res) => {

    try {

        res.send("NOT IMPLEMENTED : delete link");
        
    } catch (error) {
        res.status(500).send(error);
    }

}


exports.updateLink = async (req, res) => {

    try {

        res.send("NOT IMPLEMENTED : updatelink");
        
    } catch (error) {
        res.status(500).send(error);
    }

}
