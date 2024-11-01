import AdminSideBar from "./AdminSideBar";

import '../../css/admin/QnA.css';

const QnA = () => {
    return(
        <>
        <div className="QnA-main">
        
        <AdminSideBar/>

        
        <div className="main-content">
        <h1>Q & A</h1>
        <hr />
            <section className="qna">
           
           <div className="qna-table">
            <table>
                    <thead>
                        <tr>
                            <th>문의 내용</th>
                            <th>답변</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>결제는 무통장 입금만 가능한가요?</td>
                            <td><button>답변하기</button></td>
                        </tr>
                        <tr>
                            <td>체험판은 따로 없나요?</td>
                            <td><button>답변하기</button></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </section>
        </div>
    </div>
        </>
    )
}

export default QnA;