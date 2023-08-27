//インターフェース
export interface ITest {
  test: string;
}

//クラス
export class TestService {
    public async test(): Promise<ITest> {
        return {
           test: 'test1'
       } 
    }
}
