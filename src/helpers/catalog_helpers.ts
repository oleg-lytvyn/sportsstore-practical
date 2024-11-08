import { HelperOptions } from "handlebars";
import { stringify } from "querystring";
import { escape } from "querystring";
const getData = (options: HelperOptions) => {
    return { ...options.data.root, ...options.hash }
};
export const navigationUrl = (options: HelperOptions) => {
    const { page, pageSize } = getData(options);
    return "/?" + stringify({ page, pageSize });
}
export const escapeUrl = (url: string) => escape(url);
export const pageButtons = (options: HelperOptions) => {
    const { page, pageCount } = getData(options);
    let output = "";
    for (let i = 1; i <= pageCount; i++) {
        output += options.fn({
            page, pageCount, index: i, selected: i === page
        });
    }
    return output;
}