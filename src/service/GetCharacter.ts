import api from '@/service/character/CharacterService';
import { ListCharacter } from '@/types/ListCharacter';

const resource = '/characters';


export default {
  listar:()=>{
		return api.get<ListCharacter>(`${resource}`)
  },
  
}