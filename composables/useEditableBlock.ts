import type { Block } from "~/types/Block";
const useEditableBlock = (block: Block) => {

    onMounted(() => {
        if(block._editable) {
            const rawCommentHtml = block._editable;
            const wrapperHtmlNode = document.getElementById('storyblock-block-' + block._uid);
            if(wrapperHtmlNode) {
                // insert the editable comment before the wrapper node
                wrapperHtmlNode.insertAdjacentHTML('beforebegin', rawCommentHtml);
            }
        }
    })
};
export default useEditableBlock;
