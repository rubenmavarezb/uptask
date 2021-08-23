import { Request, Response } from 'express';
/////////////////////////////////////////////

export const projectsHome = (req:Request, res:Response) => {
    res.render('index', {
        title: 'Projects'
    })
}

export const newProject = (req:Request, res:Response) => {
    res.render('newProject', {
        title: 'New Project'
    })
}

export const postNewProject = (req:Request, res:Response) => {
    //console.log(req.body);

    //validate
    const { nombre } = req.body;

    let errors: any[] = [];

    if(!nombre) {
        errors.push({'msg': 'Add a name to this project'})
    }

    if(errors.length > 0) {
        res.render('newProject', {
            title: 'New Project',
            errors 
        });

        return;
    }
}