import { Badge } from "../ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "../ui/card"
import { DropdownMenuSeparator } from "../ui/dropdown-menu"
type stackprops = {
    stack:{   
            tech:string,
            image:string,
            niveau:string,
            description:string
    }
}
export const MyStackCard = ({stack} : stackprops) => {
    return(
        <Card className="w-70 m-4 md:w-90 h-70 shadow-[0_3px_0px_var(--color-primary)]">
            <CardContent className="">
                <CardTitle className="flex flex-row gap-3 justify-start items-center">
                    <div 
                        className="rounded-full h-10 w-20 bg-cover bg-center border-primary shrink-0"
                        style={{ backgroundImage: "url("+ stack.image + ")" }}
                    />
                    <h1 className="text-md">{stack.tech}</h1>
                </CardTitle>
                <DropdownMenuSeparator/>
                    <Badge variant="default">{stack.niveau}</Badge>
                <CardDescription className="text-md overflow-hidden">
                    <p>{stack.description}</p>
                </CardDescription>
                <CardFooter className="flex justify-end">
                </CardFooter>
            </CardContent>
        </Card>
    )
}