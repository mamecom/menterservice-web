import React from "react";
import GenericTemplate from "../templates/GenericTemplate";

const NewAccount: React.FC = () => {
  return (
    <GenericTemplate title="新規登録">
      <>●メールアドレス、パスワードを入力してください</>
    </GenericTemplate>
  );
};

export default NewAccount;