"use client";

interface Props {
    onClick: () => void
    label: string
}

const NavItem = ({ onClick, label }: Props) => {
    return (
        // <div
        //   onClick={onClick}
        //   className="
        //     px-4
        //     py-3
        //     hover:text-rose-500
        //     transition
        //     font-semibold
        //     text-lg
        //     cursor-pointer
        //     rounded-md
        //   "
        // >
        //   {label}
        // </div>
        <li>
            <a style={{ cursor: "pointer" }} onClick={onClick}>{label}</a>
        </li>
    );
};

NavItem.defaultProps = {
    onClick: undefined
}

export default NavItem;