import {useMutation} from "@tanstack/react-query";
import {AjouterObjetMetier} from "@/types/types-objets-metiers/ajouter-objet-metier";
import axios from "axios";


const useEnregistrerObjetMetier = () => {
    return useMutation({
        mutationFn: async (params: AjouterObjetMetier) => {
            console.log("Params :", params)
        }
    })
}