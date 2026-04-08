import express from 'express';
import { Request, Response } from 'express';
import {sheetRegistry, SheetEntry} from "./sheets/SheetRegistry";
import {ZodError} from "zod";

const app = express();
app.use(express.json());

app.use((err: unknown, req: Request, res: Response, next: express.NextFunction) => {
    if (err instanceof ZodError) {
        return res.status(400).json({
            error: 'Invalid calculation parameters : ' ,
            details: err.errors
        });
    }
    return res.status(500).json({ error: 'Erreur Interne' });
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.post('/calculate/:sheetCode', function (req: Request<{sheetCode: string}>, res: Response, next: express.NextFunction) {
    try {
        const entry:SheetEntry = sheetRegistry[req.params.sheetCode];
        if (!entry) return res.status(404).json({ error: 'Fiche inconnue' });
        const strategy = entry.getVersion(req.body.invoiceDate);
        return res.json({ kwhCumacs: strategy.calculate(req.body) });
    } catch (err) {
        next(err);
    }
});
