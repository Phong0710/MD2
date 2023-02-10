function main() {
    let message: number;
    let total: number = 100;
    let isProduction = true;
    let prices: Array<number> = [120, 88, 60];
    let languages: string[] = ['vi', 'en-us'];
    let now = new Date();
    let unknown: any;

    enum Direction {
        UP,
        DOWN,
        LEFT,
        RIGHT
    }

    function log(msg: string): void {
        console.log(msg)
    }

    interface IPost {
        id?: string;
        title?: string;
        body?: string;
        message?: number
    }

    isProduction = false;
    unknown = Direction.UP;
    unknown = 'changed';
    const post: IPost = {};
    message= 50

    function getPost(postId: string): IPost {
        // do something to retrieve post
        return {
            id: postId,
            title: 'Post Title',
            body: 'Post Body',
            extra: 'data'
        } as IPost;
    }
}

main();
