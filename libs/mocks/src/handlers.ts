import cuid from 'cuid'
import { rest } from 'msw'

export const handlers = [
  rest.post<{ title: string; description: string }>(
    'http://127.0.0.1:7000/notes',
    (req, res, ctx) => {
      const todayDate = new Date(Date.now()).toISOString()

      return res(
        ctx.status(200),
        ctx.json({
          id: cuid(),
          createdAt: todayDate,
          updatedAt: todayDate,
          title: req.body.title,
          text: '# This Is Your New Note\n\n> Thank you using Medea! ❤️\n\n## Tips\n* You can click the 👁 to preview\n* You can click the 📝 to edit\n\n',
          description: req.body.description,
          tags: [],
        })
      )
    }
  ),
]
