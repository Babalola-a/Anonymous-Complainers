import path from "path";

class PageController{ 
    static getHomepage(req, res){ 
        res.sendFile(path.resolve() + "/index.html");
    }
    static getSchool(req, res){ 
        res.sendFile(path.resolve() + "/school.html");
    }
}
export default PageController; 