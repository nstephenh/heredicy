import React from "react";
import {Card, CardContent, TextField, Checkbox, FormControlLabel} from "../material";
import {useRecoilState} from "recoil";
import {makeStyles} from "@material-ui/core/styles";

import * as state from "../state";

const useStyles = makeStyles((theme) => ({
    textbox: {
        "& textarea": {
            fontFamily: "monospace",
        },
    },
    card: {
        paddingBottom: 0,
    },
}));

export default function WeaponInput() {
    const classes = useStyles();
    const [weaponName, setWeaponName] = useRecoilState(state.weaponName);
    const [ws_or_bs, setWsOrBs] = useRecoilState(state.ws_or_bs);
    const [str, setStr] = useRecoilState(state.str);
    const [ap, setAp] = useRecoilState(state.ap);
    const [shots, setShots] = useRecoilState(state.shots);

    const [breaching, setBreaching] = useRecoilState(state.breaching);
    const [rending, setRending] = useRecoilState(state.rending);
    const [exoshock, setExoshock] = useRecoilState(state.exoshock);
    const [sunder, setSunder] = useRecoilState(state.sunder);



    return (
        <Card>
            <CardContent className={classes.card}>
                <TextField
                    id="outlined-weapon-name"
                    label="Weapon Name"
                    type="text"
                    value={weaponName}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => setWeaponName(e.target.value)}
                />
                <TextField
                    id="outlined-ws_or_bs"
                    label="WS or BS"
                    type="number"
                    value={ws_or_bs}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => setWsOrBs(e.target.value)}
                />
                <TextField
                    id="outlined-str"
                    label="Strength"
                    type="number"
                    value={str}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => setStr(e.target.value)}
                />
                <TextField
                    id="outlined-ap"
                    label="AP"
                    type="number"
                    value={ap}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => setAp(e.target.value)}
                />
                <TextField
                    id="outlined-shots"
                    label="Shots"
                    type="number"
                    value={shots}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => setShots(e.target.value)}
                />
            </CardContent>
            <CardContent className={classes.card}>
                <TextField
                    id="outlined-breaching"
                    label="Breaching (X+)"
                    type="number"
                    value={breaching}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => setBreaching(e.target.value)}
                />
                <TextField
                    id="outlined-rending"
                    label="Rending (X+)"
                    type="number"
                    value={rending}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => setRending(e.target.value)}
                />
                <TextField
                    id="outlined-exoshock"
                    label="Exoshock (X+)"
                    type="number"
                    value={exoshock}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => setExoshock(e.target.value)}
                />

                <FormControlLabel
                    value="top"
                    control={
                        <Checkbox
                            id='sunder'
                            checked={sunder}
                            onChange={(e) => setSunder(e.target.checked)}
                        />}
                    label="Sunder"
                    labelPlacement="top"
                />

            </CardContent>
        </Card>
    );
}
