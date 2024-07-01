import { API_URL } from "@/constants/url";
import useSWR from "swr";

/*useSWR:API通信に対して、レスポンス情報をキャッシュすることで、
毎回API通信がされてしまうのを防ぐhooks
mutateを使うことで、データのfetchを行わずにキャッシュを更新することができる。
addやeditを行ったとき、わざわざfetchしなくてもキャッシュを更新できるので便利。
*/



async function fetcher(key:string) {
    return fetch(key).then((res) => res.json())
}

export const useTodos = () => {
    const {data, isLoading, error, mutate} = useSWR(
        `${API_URL}/allTodos`,
        fetcher
    );      

    return{
        todos: data,
        isLoading,
        error,
        mutate,
    };
};