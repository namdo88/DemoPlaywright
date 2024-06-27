import fs from 'fs';
import TestConfig from '../base/test-config';
import path from 'path';

export class Utils {
    static async readJsonFile(filePath: string): Promise<any> {
        return JSON.parse(await fs.promises.readFile(filePath, 'utf-8'));
    }

    static async getValueFromJsonFile(filePath: string, key: string): Promise<any> {
        const jsonData = await this.readJsonFile(filePath);
        return jsonData[key];
    }

    static loadTestData(pageName: string, key: string): Promise<any> {
        const dataPath = path.join(__dirname, `../data/${pageName}-data/${TestConfig.LANGUAGE}.json`);
        return this.getValueFromJsonFile(dataPath, key);
      }
}