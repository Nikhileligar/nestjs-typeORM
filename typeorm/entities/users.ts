import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { users_profile } from "./user.profile";
import { join } from "path";

@Entity({name:"users"})
export class users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    username: string;

    @Column()
    password: string;

    @Column()
    createdAt: Date;

    @OneToOne(() => users_profile)
    @JoinColumn()
    profile: users_profile;
}