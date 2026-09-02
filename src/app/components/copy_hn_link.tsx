import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import {IconButton, Tooltip} from '@mui/material';
import React from 'react';

import {useCopyHistory} from '../hooks/use_copy_history';

const getClipboardText = function (itemId: string | number) {
    return `1. Aprire il link del thread.


2. Identificare:

Il titolo del post

Il link dell’articolo originale (se presente)



3. Leggere e analizzare:

L’articolo linkato

I commenti del thread




Fornisci la risposta SEMPRE in italiano, con la seguente struttura:


---

📰 Riassunto dell’articolo

Spiega chiaramente di cosa parla.

Evidenzia tesi principale e punti chiave.

Mantieni neutralità.


💬 Cosa emerge dai commenti

Riassumi i principali filoni di discussione.

Evidenzia:

Opinioni più condivise

Opinioni controverse

Critiche tecniche rilevanti


Se utile, indica quando la community è divisa.

Tieni conto dello score dei punteggi privilengiando, nel sunto finale, quali risultano le opinioni più rilevanti.


🔥 Punti particolarmente interessanti

Insight originali emersi nei commenti

Obiezioni intelligenti

Approfondimenti tecnici


📊 Clima della discussione

Prevalentemente positivo / negativo / misto

Tecnico / politico / speculativo / pratico



---

Linee guida:

Non limitarti a riassumere superficialmente.

Non tradurre parola per parola: sintetizza.

Evita citazioni lunghe.

Se l’articolo non è accessibile, dichiaralo chiaramente e riassumi solo la discussione.

Se il thread ha pochi commenti, segnalalo.

Non inventare contenuti.

Non inserire link promozionali o riferimenti inutili.


Se l’utente fornisce solo il numero ID del post, ricostruisci il link automaticamente.

Mantieni uno stile chiaro, ordinato e professionale.

---

https://news.ycombinator.com/item?id=${itemId}`;
};

export const CopyHNLink: React.FC<{itemId: string | number}> = function ({itemId}) {
    const {isCopied, markCopied} = useCopyHistory(itemId);

    const copyLink = async function () {
        await navigator.clipboard.writeText(getClipboardText(itemId));
        markCopied();
    };

    return (
        <Tooltip title="Copy the analysis prompt">
            <IconButton
                aria-label="Copy the analysis prompt"
                size="small"
                sx={{color: isCopied ? 'grey.400' : 'primary.main'}}
                onClick={copyLink}
            >
                <ContentCopyOutlinedIcon fontSize="small" />
            </IconButton>
        </Tooltip>
    );
};
