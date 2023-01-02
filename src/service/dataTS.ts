import { DataRepository } from "../repository/dataTS";

export class DataService {
    private dataRepository : DataRepository;

    constructor() {
        this.dataRepository = new DataRepository;
    }

    async createData(uid: string, Age: number): Promise<any>{ //create data
        console.log("Working")
        const data = await this.dataRepository.create(uid, Age); //save data details
        return data;
    }

    async editData(id: string, uid: string, Age: number): Promise<any> { //edit data
        const data = await this.dataRepository.edit(id, uid, Age); //save data details
        return data;
    }

    async FindData(uid: string) { //retrieve all
        const data = await this.dataRepository.find(uid);
        return data;
    }

    async FindSpecial(id: string, uid: string){ //retrieve special one
        const data = await this.dataRepository.findSpecial(id, uid);
        return data;
    }

    async DeleteData(id: string){ //delete special one
        const data = await this.dataRepository.delete(id)
        return data;
    }
}