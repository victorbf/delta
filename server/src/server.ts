import express, { NextFunction, Response, Request } from 'express';
import cors from 'cors';
import multer from 'multer';
import { PrismaClient } from '@prisma/client';

const upload = multer({ dest: 'uploads/' })

const app = express();
app.use(express.json());
app.use(cors());

const middleware = async (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore next-line
  if (!req.file) {
    return res.status(400).send('Foto é obrigatória')
  }

  return next()
}

const prisma = new PrismaClient();

app.get('/students', async(_, response) => {
  const students = await prisma.student.findMany({ where: { deletedAt: null }});
  return response.json(students);
});

app.get('/students/:id', async(req, response) => {
  const { id } = req.params;
  const student = await prisma.student.findFirst({ where: { deletedAt: null, id: +id }});
  return response.json(student);
});

app.get('/media/:filename', function (req, res) {
  const { filename } = req.params;
  res.sendFile(`uploads/${filename}`, { root: '.' });
});

app.post('/student', upload.single('photo'), middleware, async(req, res) => {
  const { body } = req;
  const data = {
    name: body.name,
    address: body.address,
    cellphone: body.cellphone,
    photo: req.file?.filename || '',
  };

  try {
    if (!data.name || !data.address || !data.cellphone || !data.photo) {
      throw Error('Campo inválido');
    }
    const newStudent = await prisma.student.create({
      data,
    });
    return res.status(201).json(newStudent);
  } catch (error) {
    return res.status(400).send(error);
  }
});

app.patch('/student/:id', upload.single('photo'), async (req, res) => {
  const { body } = req;
  const data = {
    name: body.name,
    address: body.address,
    cellphone: body.cellphone,
    photo: req.file?.filename,
    deletedAt: body.deletedAt || null
  };

  try {
    const updatedStudent = await prisma.student.update({
      data,
      where: {
        id: +req.params.id,
      }
    });
    return res.status(201).json(updatedStudent);
  } catch (error) {
    return res.status(400).send(error);
  };
})

app.listen(8080);
