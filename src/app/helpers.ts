import { useRouter } from "next/navigation";

export const useHandlePostClick = () => {
    const router = useRouter();

    return (slug: string) => {
        router.push(`/articles/${slug}`);
    };
};

