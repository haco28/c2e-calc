import express from 'express';
import { Request, Response } from 'express';
import {sheetRegistry, SheetEntry} from "./sheets/SheetRegistry";

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.post('/calculate/:sheetCode', function (req: Request<{sheetCode: string}>, res: Response) {
    const entry:SheetEntry = sheetRegistry[req.params.sheetCode];
    if (!entry) return res.status(404).json({ error: 'Fiche inconnue' });

    const strategy = entry.getVersion(req.body.invoiceDate);
    return res.json({ kwhCumacs: strategy.calculate(req.body) });
});
